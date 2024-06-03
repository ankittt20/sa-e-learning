import { getAllCategories } from "@/actions/generalFunctions.actions";
import { useState, useEffect } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState<
    {
      id: number;
      name: string;
      type: number;
      icon: string | null;
      createdAt: Date;
    }[]
  >([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // fetch categories
  const fetchCategories = async () => {
    setLoading(true);
    const res = await getAllCategories();
    if (!res.success) {
      setError(res.message);
      setCategories([]);
    } else setCategories(res.categories);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useCategories;
