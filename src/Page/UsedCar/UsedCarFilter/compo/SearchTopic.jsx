/** @format */

const SearchTopic = ({ children, icon }) => {
  return (
    <div className="center-itm gap-3">
      <div className="avatar placeholder text-gray-500 font-bold">
        <div className="bg-base-100 rounded-full w-12">
          <span className="text-4xl">{icon}</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default SearchTopic;
