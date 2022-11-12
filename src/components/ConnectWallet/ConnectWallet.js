const ConnectWallet = ({ onCloseHandler }) => {
  return (
    // Backdrop
    <div
      className="fixed w-full min-h-screen top-0 bg-[rgba(64,64,64,0.3)] z-40 flex items-center justify-center px-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onCloseHandler();
        }
      }}
    >
      {/* Modal */}
      <section className="bg-white py-4 rounded-xl w-full max-w-[30rem]">
        <div className="relative mb-4 px-4">
          <p className="">Connect Wallet</p>
          <button className="absolute top-0 right-4" onClick={onCloseHandler}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path
                d="M13.3536 3.35357L13.7072 3.00001L13.0001 2.29291L12.6465 2.64646L13.3536 3.35357ZM2.64652 12.6465L2.29297 13L3.00008 13.7071L3.35363 13.3536L2.64652 12.6465ZM3.35363 2.64646L3.00008 2.29291L2.29297 3.00001L2.64652 3.35357L3.35363 2.64646ZM12.6465 13.3536L13.0001 13.7071L13.7072 13L13.3536 12.6465L12.6465 13.3536ZM12.6465 2.64646L2.64652 12.6465L3.35363 13.3536L13.3536 3.35357L12.6465 2.64646ZM2.64652 3.35357L12.6465 13.3536L13.3536 12.6465L3.35363 2.64646L2.64652 3.35357Z"
                fill="black"
              ></path>
            </svg>
          </button>
        </div>

        <div className="py-2 px-4 border-t flex flex-col gap-3">
          <p className="mt-2">Choose your preferred wallet:</p>
          <div className="border relative rounded-lg p-3 flex gap-4 items-center cursor-pointer hover:bg-[#F8F9FA]">
            <img
              className="w-8"
              src="/assets/metamask-logo.png"
              alt="Metamask icon"
            />
            <p>Metamask</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              //   enable-background="new 0 0 24 24"
              className="absolute top-5 right-4 fill-[#959DA6]"
            >
              <path d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"></path>
            </svg>
          </div>
          <div className="border relative rounded-lg p-3 flex gap-4 items-center cursor-pointer hover:bg-[#F8F9FA]">
            <img
              className="w-8"
              src="/assets/walletcoin-logo.png"
              alt="Metamask icon"
            />
            <p>WalletCoin</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              //   enable-background="new 0 0 24 24"
              className="absolute top-5 right-4 fill-[#959DA6]"
            >
              <path d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"></path>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectWallet;
