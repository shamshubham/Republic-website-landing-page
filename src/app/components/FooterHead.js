const FooterHead = () => {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center">
        <img
          alt="Logo of Avawatz"
          title="Avawatz"
          srcSet="https://uploads.republic.com/p/offerings/hierarchical_offerings/logos/medium_2x/000/007/717/7717-1706912407-5daadcf20b04d2c1ed41c5e0a958f92a9c553f9c.png 2x"
          src="https://uploads.republic.com/p/offerings/hierarchical_offerings/logos/medium/000/007/717/7717-1706912407-79bcc4d4683a918a3ae2340ce22ab65515b338a2.png"
          className="w-[70px] h-[70px]"
        />
        <h1 className="ml-3 text-lg" style={{ fontWeight: 800, fontSize: 70 }}>
          Avawatz
        </h1>
      </div>
      <div className="mt-5">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-lg hover:bg-blue-600">
          Invest in Avawatz
        </button>
        <button className="ml-3 py-2 px-4 border border-gray-300 rounded-md text-lg bg-white hover:bg-gray-100">
          Follow <span className="ml-2">128</span>
        </button>
      </div>
    </div>
  );
};

export default FooterHead;
