import { getBillboards } from "@/actions/get-billboard";
import { getCatalogue } from "@/actions/get-catalogue";
import Container from "@/components/ui/container";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import Noresults from "@/components/ui/no-results";
import { API_URL } from "@/utils/urls";
import Link from "next/link";

const CataloguePage = async () => {
  const formImage = await getBillboards("9");
  const wooden = await getCatalogue("wooden");
  const CONTEMPORARY = await getCatalogue("contemporary");
  const eclectic = await getCatalogue("eclectic");

  return (
    <Container>
      <div>
        <div className="flex w-full min-h-screen">
          <ContactForm bg={formImage} />
        </div>

        <div className="m-8">
          <h1 className="text-6xl font-bold">WOODEN RANGE</h1>
          {wooden === null ? (
            <Noresults />
          ) : (
            <div className="space-y-4 px-4 mt-8">
              {wooden.length === 0 && <Noresults />}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-x-4 md:gap-y-8 md:mb-8 gap-x-1 gap-y-4">
                {wooden.map((item: { attributes: any; data: any; id: any }) => (
                  <Link href={`/catalogue/${item.id}`}>
                    <div
                      key={item.id}
                      className="w-[241px] h-[285px] relative rounded-[10px] overflow-hidden hover:shadow-lg transition duration-300 ease-in-out group cursor-pointer"
                    >
                      <img
                        className="w-[264px] h-[288.75px] left-0 top-0 absolute transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-[10px]"
                        src={`${API_URL}${item.attributes.images.data[0].attributes.url}`}
                        alt={item.attributes.images.data[0].attributes.name}
                      />

                      <div className="hover-container absolute left-0 bottom-0 w-full p-4 bg-gradient-to-t from-zinc-900 to-transparent transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                        <h3 className="text-white text-lg font-semibold mb-2">
                          {item.attributes.name}
                        </h3>
                        <p className="text-neutral-300 text-xs">
                          {item.attributes.tags}
                        </p>
                        <p className="text-neutral-300 text-xs mt-1">
                          {item.attributes.createdAt}
                        </p>
                      </div>

                      {/* <div className="w-[120px] h-[37px] right-[10px] bottom-[10px] absolute flex items-center justify-center cursor-pointer">
                      <div className="w-full h-full bg-zinc-800 bg-opacity-50 rounded-[25px] shadow backdrop-blur-[14px] flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-700 hover:bg-opacity-70">
                        <div className="text-white text-[15px] font-semibold">
                          TRY NOW
                        </div>
                        <img
                          className="w-[25px] h-[25px] ml-1"
                          src="./try_now.png"
                          alt="Try Now Icon"
                        />
                      </div>
                    </div> */}
                      <div className="w-[120px] h-[28px] right-[10px] top-[8px] absolute flex items-center">
                        <div className="w-full h-full bg-zinc-300 bg-opacity-50 rounded-[25px] shadow backdrop-blur-[14px] flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-700 hover:bg-opacity-70">
                          <div className="text-zinc-950 text-[15px] font-semibold">
                            TRENDING
                          </div>
                          <img
                            className="w-4 h-4 ml-1"
                            src="./trending.png"
                            alt="Trending Icon"
                          />
                        </div>
                      </div>
                      <div className="w-[90px] h-[25px] right-[10px] top-[40px] absolute">
                        <div className="w-full h-full bg-zinc-300 bg-opacity-50 rounded-[25px] shadow backdrop-blur-[14px] flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-700 hover:bg-opacity-70">
                          <div className="text-neutral-800 text-[10px] font-semibold">
                            MOST PICKED
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="m-8">
          <h1 className="text-6xl font-bold">CONTEMPORARY RANGE</h1>
          {CONTEMPORARY === null ? (
            <Noresults />
          ) : (
            <div className="space-y-4 px-4 mt-8">
              {CONTEMPORARY.length === 0 && <Noresults />}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-x-4 md:gap-y-8 md:mb-8 gap-x-1 gap-y-4">
                {CONTEMPORARY.map(
                  (item: { attributes: any; data: any; id: any }) => (
                    <div
                      key={item.id}
                      className="w-[241px] h-[285px] relative rounded-[10px] overflow-hidden hover:shadow-lg transition duration-300 ease-in-out group"
                    >
                      <img
                        className="w-[264px] h-[288.75px] left-0 top-0 absolute transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-[10px]"
                        src={`${API_URL}${item.attributes.images.data[0].attributes.url}`}
                        alt={item.attributes.images.data[0].attributes.name}
                      />

                      <div className="hover-container absolute left-0 bottom-0 w-full p-4 bg-gradient-to-t from-zinc-900 to-transparent transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                        <h3 className="text-white text-lg font-semibold mb-2">
                          {item.attributes.name}
                        </h3>
                        <p className="text-neutral-300 text-xs">
                          {item.attributes.tags}
                        </p>
                        <p className="text-neutral-300 text-xs mt-1">
                          {item.attributes.createdAt}
                        </p>
                      </div>

                      {/* <div className="w-[120px] h-[37px] right-[10px] bottom-[10px] absolute flex items-center justify-center cursor-pointer">
                      <div className="w-full h-full bg-zinc-800 bg-opacity-50 rounded-[25px] shadow backdrop-blur-[14px] flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-700 hover:bg-opacity-70">
                        <div className="text-white text-[15px] font-semibold">
                          TRY NOW
                        </div>
                        <img
                          className="w-[25px] h-[25px] ml-1"
                          src="./try_now.png"
                          alt="Try Now Icon"
                        />
                      </div>
                    </div> */}
                      <div className="w-[120px] h-[28px] right-[10px] top-[8px] absolute flex items-center">
                        <div className="w-full h-full bg-zinc-300 bg-opacity-50 rounded-[25px] shadow backdrop-blur-[14px] flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-700 hover:bg-opacity-70">
                          <div className="text-zinc-950 text-[15px] font-semibold">
                            TRENDING
                          </div>
                          <img
                            className="w-4 h-4 ml-1"
                            src="./trending.png"
                            alt="Trending Icon"
                          />
                        </div>
                      </div>
                      <div className="w-[90px] h-[25px] right-[10px] top-[40px] absolute">
                        <div className="w-full h-full bg-zinc-300 bg-opacity-50 rounded-[25px] shadow backdrop-blur-[14px] flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-700 hover:bg-opacity-70">
                          <div className="text-neutral-800 text-[10px] font-semibold">
                            MOST PICKED
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        <div className="m-8">
          <h1 className="text-6xl font-bold">ECLECTIC RANGE</h1>
          {eclectic === null ? (
            <Noresults />
          ) : (
            <div className="space-y-4 px-4 mt-8">
              {eclectic.length === 0 && <Noresults />}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-x-4 md:gap-y-8 md:mb-8 gap-x-1 gap-y-4">
                {eclectic.map(
                  (item: { attributes: any; data: any; id: any }) => (
                    <div
                      key={item.id}
                      className="w-[241px] h-[285px] relative rounded-[10px] overflow-hidden hover:shadow-lg transition duration-300 ease-in-out group"
                    >
                      <img
                        className="w-[264px] h-[288.75px] left-0 top-0 absolute transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-[10px]"
                        src={`${API_URL}${item.attributes.images.data[0].attributes.url}`}
                        alt={item.attributes.images.data[0].attributes.name}
                      />

                      <div className="hover-container absolute left-0 bottom-0 w-full p-4 bg-gradient-to-t from-zinc-900 to-transparent transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                        <h3 className="text-white text-lg font-semibold mb-2">
                          {item.attributes.name}
                        </h3>
                        <p className="text-neutral-300 text-xs">
                          {item.attributes.tags}
                        </p>
                        <p className="text-neutral-300 text-xs mt-1">
                          {item.attributes.createdAt}
                        </p>
                      </div>

                      {/* <div className="w-[120px] h-[37px] right-[10px] bottom-[10px] absolute flex items-center justify-center cursor-pointer">
                      <div className="w-full h-full bg-zinc-800 bg-opacity-50 rounded-[25px] shadow backdrop-blur-[14px] flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-700 hover:bg-opacity-70">
                        <div className="text-white text-[15px] font-semibold">
                          TRY NOW
                        </div>
                        <img
                          className="w-[25px] h-[25px] ml-1"
                          src="./try_now.png"
                          alt="Try Now Icon"
                        />
                      </div>
                    </div> */}
                      <div className="w-[120px] h-[28px] right-[10px] top-[8px] absolute flex items-center">
                        <div className="w-full h-full bg-zinc-300 bg-opacity-50 rounded-[25px] shadow backdrop-blur-[14px] flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-700 hover:bg-opacity-70">
                          <div className="text-zinc-950 text-[15px] font-semibold">
                            TRENDING
                          </div>
                          <img
                            className="w-4 h-4 ml-1"
                            src="./trending.png"
                            alt="Trending Icon"
                          />
                        </div>
                      </div>
                      <div className="w-[90px] h-[25px] right-[10px] top-[40px] absolute">
                        <div className="w-full h-full bg-zinc-300 bg-opacity-50 rounded-[25px] shadow backdrop-blur-[14px] flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-700 hover:bg-opacity-70">
                          <div className="text-neutral-800 text-[10px] font-semibold">
                            MOST PICKED
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default CataloguePage;
