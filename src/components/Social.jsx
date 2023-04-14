import { icons } from "../constants/constants.js";
const Social = () => {
  return (
    <div
      className={`px-1 bg-opacity-90 py-2 rounded-r-2xl fixed left-0 top-2/4 bg-primary `}
    >
      <div className="flex flex-col gap-2">
        {icons.map(({ icon, url, alt }) => (
          <a key={url} href={url}>
            <img
              className="hover:scale-110 w-8 h-8 sm:w-10 sm:h-10"
              src={icon}
              alt={alt}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;
