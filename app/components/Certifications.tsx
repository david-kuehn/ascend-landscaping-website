import Image from "next/image";

import abpaImage from "../../public/certifications/abpa.png";
import hpcImage from "../../public/certifications/hpc.png";
import iamImage from "../../public/certifications/iam.png";
import igiaImage from "../../public/certifications/igia.png";
import ilcaImage from "../../public/certifications/ilca.png";

export default function Certifications() {
  return (
    <div className="flex items-center justify-center gap-1 pb-4 px-2">
      <Image
        src={abpaImage}
        alt=""
        height={35}
      />
      <Image
        src={hpcImage}
        alt=""
        height={35}
      />
      <Image
        src={iamImage}
        alt=""
        height={35}
      />
      <Image
        src={igiaImage}
        alt=""
        height={35}
      />
      <Image
        src={ilcaImage}
        alt=""
        height={35}
      />
    </div>
  )
}
