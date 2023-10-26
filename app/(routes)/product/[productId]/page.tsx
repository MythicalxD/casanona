import Container from "@/components/ui/container";
import Gallery from "@/components/gallery";
import InfoPage from "@/components/info";
import { getProduct } from "@/actions/get-product";
import ProductCard2 from "@/components/ui/product-card2";
import { getProducts } from "@/actions/get-products";
import Noresults from "@/components/ui/no-results";
import HomeNav from "@/components/home-nav";
import { getCategories } from "@/actions/get-categories";
import BrowseNav from "@/components/browse-nav";
import Footer from "@/components/footer";
import { getColors } from "@/actions/get-colors";
import { getFabrics } from "@/actions/get-fabric";
import Filter from "../../category/[categoryId]/[pageId]/components/filter";
import MobileFilter from "../../category/[categoryId]/[pageId]/components/mobile-filters";
import { getArrivals } from "@/actions/get-arrivals";
import { Separator } from "@/components/ui/separator";
import { Cross, Minimize2 } from "lucide-react";
import HomeNavBase from "@/components/home-nav-base";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPageContainer: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const getAll = await getProducts("1");
  const suggestedProducts = await getProducts("1");
  const category = await getCategories();
  const colors = await getColors();
  const fabrics = await getFabrics();

  // Get new products
  const arrivals = await getArrivals();

  return (
    <div className="bg-white">
      <Container>
        <HomeNavBase />
        <Separator />
        {/* Browser */}
        <BrowseNav data={category.data} arrivals={arrivals} />
        <Separator />

        <div className="lg:flex">
          <div className="flex flex-col">
            <h2 className="text-[40px] text-black ml-4 font-semibold md:block hidden">
              Products
            </h2>
            <div className="w-[250px] border-r pr-4 hidden lg:block">
              <div className="">
                <h2 className="font-bold text-gray-700 text-2xl ml-4 mb-2">
                  {product?.category?.name}
                </h2>

                {/* Render the filters */}
                <div className="p-4 pt-0">
                  <Filter valueKey="colorId" name="Colors" data={colors} />
                  <Filter valueKey="fabric" name="Fabric Type" data={fabrics} />
                </div>
                <MobileFilter colors={colors} sizes={[]} />
              </div>
            </div>
          </div>

          {product === null ? (
            <Noresults />
          ) : (
            <div className="lg:flex-4 w-full lg:mr-16 justify-center items-center">
              <div className="px-4 pb-10 sm:px-6 lg:px-8">
                <div className="lg:flex lg:flex-wrap lg:-mx-4 gap-x-8">
                  <div className="lg:flex-col gap-y-4 md:flex gap-x-6 mt-4 hidden">
                    <ProductCard2 data={getAll[2]} />
                    <ProductCard2 data={getAll[1]} />
                  </div>

                  <div className="lg:flex flex flex-col gap-y-4">
                    <Gallery product={product} />
                  </div>

                  <div className="lg:flex-1 mt-4 px-4 sm:mt-4 sm:px-0">
                    <InfoPage data={product} />
                  </div>
                </div>
              </div>
              <div className="space-y-4 px-4 mt-8">
                {suggestedProducts.length === 0 && <Noresults />}
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-x-4 md:gap-y-8 md:mb-8 gap-x-1 gap-y-4">
                  {suggestedProducts.map((item: { id: any }) => (
                    <ProductCard2 data={item} key={item.id} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ProductPageContainer;
