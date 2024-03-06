import { useRouter } from "next/router";
import { useState } from "react";

const Navigation = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [quantity, setQuantityTotal] = useState(0);
  // const { state, action } = useContext(CartContext);
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(false);
  return <div>Navlinks</div>;
};

export default Navigation;
