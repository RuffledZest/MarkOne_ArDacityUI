// Basic implementation for ArDacity HeroOne component
export const connectWallet = async () => {
  if (window.arweaveWallet) {
    await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
    return true;
  }
  return false;
};

export const disconnectWallet = async () => {
  if (window.arweaveWallet) {
    await window.arweaveWallet.disconnect();
    return true;
  }
  return false;
};

export const getWalletAddress = async () => {
  if (window.arweaveWallet) {
    return await window.arweaveWallet.getActiveAddress();
  }
  return '';
}; 