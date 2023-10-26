import { getOrders } from "@/actions/get-orders";
import HomeNav from "@/components/home-nav";
import HomeNavBase from "@/components/home-nav-base";
import PlacedOrdersPage from "@/components/placed-orders";
import SaveDialog from "@/components/save-dialog";

interface OrdersProp {
  params: {
    mob: string;
  };
}

const Orders: React.FC<OrdersProp> = async ({ params }) => {
  const orders = await getOrders(params.mob);

  return (
    <div>
      {/* Navigation */}
      <HomeNavBase />
      <PlacedOrdersPage ordersData={orders} />
    </div>
  );
};

export default Orders;
