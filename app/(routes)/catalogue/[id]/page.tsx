import { getCatalogueID } from "@/actions/get-catalogueID";
import HomeNavBase from "@/components/home-nav-base";
import Container from "@/components/ui/container";
import Comp from "./components/comp";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const View: React.FC<ProductPageProps> = async ({ params }) => {
  const wooden = await getCatalogueID(`${params.id}`);

  return (
    <div>
      <Container>
        <HomeNavBase />
        <Comp product={wooden} />
      </Container>
    </div>
  );
};

export default View;
