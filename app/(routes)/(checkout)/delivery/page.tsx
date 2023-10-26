import { getBillboards } from "@/actions/get-billboard";
import AddressForm from "@/components/address-form";
import Footer from "@/components/footer";

const DeliveryPage = async () => {
  const background = await getBillboards("2");

  return (
    <div>
      <AddressForm bg={background} />
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default DeliveryPage;
