import { SubmissionsDatatable } from "@/features/submissions/components/submissions-datatable";
import { useListSubmissionsHandler } from "@/features/submissions/hooks/handlers/use-list-submissions-handler";

export function SubmissionsPage() {
  const { data, loading, error } = useListSubmissionsHandler();

  if (loading) {
    return <div className="text-center mt-12 text-lg text-primary">Carregando dados...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-12 text-lg text-red-500">Erro ao carregar dados: {error}</div>
    );
  }

  return (
    <div className="flex flex-col items-center h-full p-4 sm:p-8">
      <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-8 text-primary text-center">
        Dados de Contato Recebidos
      </h2>
      {data.length === 0 ? (
        <p className="text-base sm:text-lg text-[#333] text-center">
          Nenhum dado cadastrado ainda.
        </p>
      ) : (
        <div className="w-full flex justify-center overflow-x-auto">
          <SubmissionsDatatable data={data} />
        </div>
      )}
    </div>
  );
}
