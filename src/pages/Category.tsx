import React, { useState, useCallback } from "react";

type Category = {
  id: string;
  category_name: string;
  category_description: string;
  is_active: boolean;
};

type CategoryFormProps = {
  category?: Category;
  onSubmit: (category: Category) => void;
  onCancel?: () => void;
};

const CategoryForm: React.FC<CategoryFormProps> = ({
  category,
  onSubmit,
  onCancel,
}) => {
  const [categoryName, setCategoryName] = useState(
    category?.category_name || ""
  );
  const [categoryDescription, setCategoryDescription] = useState(
    category?.category_description || ""
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      id: category?.id || Date.now().toString(),
      category_name: categoryName,
      category_description: categoryDescription,
      is_active: true,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col">
        <label htmlFor="categoryName" className="mb-2 text-lg font-semibold">
          Category Name
        </label>
        <input
          id="categoryName"
          type="text"
          className="form-input px-4 py-2 border border-gray-300 rounded-md"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Category Name"
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="categoryDescription"
          className="mb-2 text-lg font-semibold"
        >
          Category Description
        </label>
        <textarea
          id="categoryDescription"
          className="form-textarea px-4 py-2 border border-gray-300 rounded-md"
          value={categoryDescription}
          onChange={(e) => setCategoryDescription(e.target.value)}
          placeholder="Category Description"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {category ? "Save" : "Add Category"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const handleAddSubmit = useCallback(
    (newCategory: Category) => {
      setCategories([...categories, newCategory]);
    },
    [categories]
  );

  const handleEditSubmit = useCallback(
    (updatedCategory: Category) => {
      setCategories(
        categories.map((category) =>
          category.id === updatedCategory.id ? updatedCategory : category
        )
      );
      setEditingCategory(null);
    },
    [categories]
  );

  const startEditing = (category: Category) => {
    setEditingCategory(category);
  };

  const deleteCategory = useCallback(
    (categoryId: string) => {
      setCategories(
        categories.filter((category) => category.id !== categoryId)
      );
    },
    [categories]
  );

  return (
    <div className="p-8">
      {editingCategory ? (
        <CategoryForm
          category={editingCategory}
          onSubmit={handleEditSubmit}
          onCancel={() => setEditingCategory(null)}
        />
      ) : (
        <CategoryForm onSubmit={handleAddSubmit} />
      )}
      <div className="mt-10">
        {categories.map((category) => (
          <div
            className="p-4 my-2 bg-white shadow-md rounded-md"
            key={category.id}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">
                  {category.category_name}
                </h3>
                <p className="text-gray-600">{category.category_description}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => startEditing(category)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteCategory(category.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
