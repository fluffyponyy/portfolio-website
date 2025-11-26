import dynamic from "next/dynamic";

const StarField = dynamic(() => import("./star_field"), {
    ssr: false
});

export default StarField;