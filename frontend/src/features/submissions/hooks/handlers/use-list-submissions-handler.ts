import { type Submission } from "@/features/submissions/types/submission";
import { axiosClient } from "@/lib/axios/axios-client";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function useListSubmissionsHandler() {
  const [data, setData] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/api/list-submissions");
        setData(response.data);
      } catch (error) {
        toast.error("Erro ao carregar dados de contato");
        setError("Erro ao carregar dados");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
}
