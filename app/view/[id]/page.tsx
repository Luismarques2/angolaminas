import MainContainer from "@/app/_components/main-container";
import Photo from "@/app/_components/photo";
import { home_photos } from "@/app/_tests/json";
import Title from "@/app/_components/title";
import MoreViews from "@/app/_components/more-view";

// export async function getServerSideProps(context: { params: { id: string } }) {
//   const { id } = context.params; // Obtém o `id` da URL
//   const numericId = parseInt(id, 10);
//   // Busca os dados necessários
//   const item = home_photos[numericId] || null;
//   // Retorna os dados como props
//   return {
//     props: {
//       id,
//       item,
//     },
//   };
// }

export default async function View({ params }: { params: Promise<{ id: string }> }) {
  const numericId = parseInt((await params).id, 10);
  const item = home_photos[numericId] || null;

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <MainContainer className={"flex flex-col gap-[36px]"}>
      <Photo items={[item]} className={"max-w-full h-[500px]"} nolink />
      <div className={"w-full flex flex-col gap-[22px]"}>
        <Title
          text={item.title}
          style={{
            color: "orange",
          }}
        />
        <span>{item.sub}</span>
      </div>
      <MoreViews />
    </MainContainer>
  );
}
