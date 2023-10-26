import Container from "@/components/ui/container";
import Noresults from "@/components/ui/no-results";
import { getSubCategories } from "@/actions/get-sub-categories";
import ProductCard2 from "@/components/ui/product-card2";
import HomeNav from "@/components/home-nav";
import { getFabrics } from "@/actions/get-fabric";
import Filter from "./components/filter";
import MobileFilter from "./components/mobile-filters";
import { getColors } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import SearchBar from "@/components/searchBar";
import BrowseNav from "@/components/browse-nav";
import { getCategories } from "@/actions/get-categories";
import { getArrivals } from "@/actions/get-arrivals";
import { getFilters } from "@/actions/get-filters";
import { Separator } from "@/components/ui/separator";
import HomeNavBase from "@/components/home-nav-base";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const SearchPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const products = await getFilters(params.categoryId);
  const colors = await getColors();
  const fabrics = await getFabrics();
  const allProducts = await getProducts("1");

  console.log(products);

  // Get category
  const category = await getCategories();

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
          <div className="w-[300px] border-r pr-4 hidden lg:block pt-10">
            <div className="">
              <h2 className="font-bold text-gray-700 text-2xl ml-4 mb-2"></h2>

              {/* Render the filters */}
              <div className="p-4">
                <Filter valueKey="colorId" name="Colors" data={colors} />
                <Filter valueKey="fabric" name="Fabric Type" data={fabrics} />
              </div>
              <MobileFilter sizes={fabrics} colors={colors} />
            </div>
          </div>
          {/* NavBar (Shown on smaller screens) */}
          <div className="lg:hidden mx-auto p-4">NavBar small</div>
          <div className="lg:flex-4 w-full lg:mr-16">
            <div className="flex ml-8 mb-4 mt-4 items-end">
              <p>Search Results for : </p>
              <h2 className="text-3xl font-bold ml-2">
                {params.categoryId}
                {` (${products.length})`}
              </h2>
            </div>

            <div className="space-y-4 px-4">
              {products.length === 0 && <Noresults />}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-4 gap-y-8 mb-8">
                {products.map((item: { id: any }) => (
                  <ProductCard2 data={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchPage;
