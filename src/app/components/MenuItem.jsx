import Link from "next/link";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

function MenuItem({ categories, title, setIsMenuOpen }) {
  const [isMenuItemOpen, setIsMenuItemOpen] = useState(false);

  return (
    <div
      className="border-b-2 py-5 lg:py-0 cursor-pointer group lg:border-none"
      onClick={() => setIsMenuItemOpen((prev) => !prev)}
    >
      <div className="lg:group">
        <div className="flex items-center justify-between lg:gap-2 lg:py-2 lg:group-hover:text-white lg:px-3 lg:rounded-lg lg:group-hover:bg-[#2a55e5] lg:uppercase lg:font-semibold">
          <h2>{title}</h2>
          <AiOutlineDown className="lg:text-xs" />
        </div>

        <ul
          className={`pt-5 ml-5 flex-col gap-2 hidden ${
            isMenuItemOpen ? "max-lg:flex" : ""
          } lg:fixed lg:ml-0 lg:w-60 lg:group-hover:flex lg:shadow-[0_4px_16px_0_rgba(0,0,0,0.2)] bg-white lg:pt-0 lg:rounded-bl-md lg:rounded-br-md lg:text-base`}
        >
          {categories?.map((category) => (
            <Link
              key={category.id}
              href={`/${title.toLowerCase()}-${category.attributes.slug}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="lg:hover:bg-gray-100 lg:px-5 lg:py-3">
                {category.attributes.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuItem;
