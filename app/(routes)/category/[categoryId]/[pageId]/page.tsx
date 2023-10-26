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
import BrowseNav from "@/components/browse-nav";
import { getCategories } from "@/actions/get-categories";
import { getArrivals } from "@/actions/get-arrivals";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomeNavBase from "@/components/home-nav-base";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
    pageId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const products = await getSubCategories(params.categoryId, params.pageId);
  const colors = await getColors();
  const fabrics = await getFabrics();
  const allProducts = await getProducts(params.pageId);

  // Get category
  const category = await getCategories();

  // Get new products
  const arrivals = await getArrivals();

  // pagination
  const pageId = parseInt(params.pageId, 10); // Parse as base 10 (decimal)
  let prevPageId = pageId.toString();
  let nextPageId = (pageId + 1).toString();
  if (pageId - 1 > 0) {
    prevPageId = (pageId - 1).toString();
  }

  return (
    <div className="bg-white">
      <Container>
        <HomeNavBase />

        {/* Search */}
        <BrowseNav data={category.data} arrivals={arrivals} />

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
          <div className="lg:flex-4 w-full lg:mr-16">
            {params.categoryId === "all" ? (
              <h2 className="text-3xl font-bold ml-8">Our Collection</h2>
            ) : (
              <div className="flex ml-8 mb-4 mt-4 items-end">
                <p>Search Results for : </p>
                <h2 className="text-3xl font-bold ml-2">
                  {products[0]?.attributes.name}
                  {` (${products[0]?.attributes.products.data.length})`}
                </h2>
              </div>
            )}

            {params.categoryId === "all" ? (
              <div className="space-y-4 px-4">
                {allProducts.length === 0 ? (
                  <Noresults />
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-4 gap-y-8 mb-8 mt-4 min-h-[80vh]">
                    {allProducts.map((item: { id: any }) => (
                      <ProductCard2 data={item} key={item.id} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4 px-4">
                {products[0]?.attributes.products.data.length === 0 ? (
                  <Noresults />
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-4 gap-y-8 mb-8 min-h-[80vh]">
                    {products[0]?.attributes.products.data.map(
                      (item: { id: any }) => (
                        <ProductCard2 data={item} key={item.id} />
                      )
                    )}
                  </div>
                )}
              </div>
            )}
            {(allProducts.length >= 30 ||
              products[0]?.attributes.products.data.length >= 30 ||
              parseInt(params.pageId, 10) > 1) && (
              <div className="flex w-full justify-center items-center gap-x-4 mt-4 mb-4">
                <Link href={`./${prevPageId}`}>
                  <Button className="w-[100px]">Previous</Button>
                </Link>
                <Link href={`./${nextPageId}`}>
                  <Button className="w-[100px]">Next</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
