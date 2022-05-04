require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "KHeadz DROP";
const description = "New KickHeadz NFT Drop";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
 // Cloaked KickHead w/Headware = 
 {
  growEditionSizeTo:3,
  layersOrder: [
    { name: "Cloak Background" },
    { name: "Cloak Heads M" },
    { name: "Cloak Eyes" },
    { name: "Cloak Expressions" },
    { name: "Cloak Shades" },
    { name: "Cloak Hoods" },
    { name: "Cloak Hats" },
    { name: "Sneaker" },
    { name: "Cloak Hair RareOveralls" },
    { name: "Sneakershade" },
    
  ],
},

// Cloaked KickHead Goat w/Headware =
{
  growEditionSizeTo:3,
  layersOrder: [
    { name: "Cloak Background" },
    { name: "KD LB MM Heads" },
    { name: "Goatface" },
    { name: "KD LB MM Fades" },
    { name: "KD LB MM Cloak" },
    { name: "KD LB MM Kicks" },
    { name: "Goat Rares" },
    { name: "Sneakershade" },
    
  ],
},

// Cloaked KH Skeletons w/Headware = 
{
  growEditionSizeTo:6,
  layersOrder: [
    { name: "Cloak Background" },
    { name: "Cloak Skulls" },
    { name: "Cloak Eyes" },
    { name: "Cloak Shades" },
    { name: "Cloak Hoods" },
    { name: "Cloak Hats" },
    { name: "Sneaker" },
    { name: "Cloak Hair RareOveralls" },
    { name: "Sneakershade" },
    
  ],
},
// Cloaked KickHead w/HairTops =
{
  growEditionSizeTo:9,
  layersOrder: [
    { name: "Cloak Background" },
    { name: "Cloak Head" },
    { name: "Cloak Eyes" },
    { name: "Cloak Expressions" },
    { name: "Cloak Shades" },
    { name: "Cloak Hoods" },
    { name: "Cloak Hairtops" },
    { name: "Sneaker" },
    { name: "Cloak RareOveralls" },
    { name: "Sneakershade" },
    
  ],
},

// Cloaked KickHead Goat w/HairTops =
{
  growEditionSizeTo:12,
  layersOrder: [
    { name: "Cloak Background" },
    { name: "KD LL LEBRON Heads" },
    { name: "KD LL LEBRON Fade" },
    { name: "Goated" },
    { name: "KD LL LEBRON Cloak" },
    { name: "KD LL LEBRON Hats" },
    { name: "KD LL LEBRON Kicks" },
    { name: "Goat Rares" },
    { name: "Sneakershade" },
    
  ],
},
// Cloaked KH Skeletons w/HairTops =
{
  growEditionSizeTo:15,
  layersOrder: [
    { name: "Cloak Background" },
    { name: "Cloak Skulls" },
    { name: "Cloak Eyes" },
    { name: "Cloak Shades" },
    { name: "Cloak Hoods" },
    { name: "Cloak Hairtops" },
    { name: "Sneaker" },
    { name: "Cloak RareOveralls" },
    { name: "Sneakershade" },
    
  ],
},
//Cloaked Jason x Spacehead =
{
  growEditionSizeTo:18,
  layersOrder: [
    { name: "Cloak Background" },
    { name: "Cloak Head" },
    { name: "Cloak Eyes" },
    { name: "Cloak ExpressionsX" },
    { name: "Cloak Fades" },
    { name: "Cloak Shades" },
    { name: "Cloak HoodsX" },
    { name: "Sneaker" },
    { name: "Cloak Hair RareOveralls" },
    { name: "Sneakershade" },
    
  ],
},
//Cloaked Skeleton Jason x Spacehead =3250
{
  growEditionSizeTo:21,
  layersOrder: [
    { name: "Cloak Background" },
    { name: "Cloak Skulls" },
    { name: "Cloak Eyes" },
    { name: "Cloak Fades" },
    { name: "Cloak Shades" },
    { name: "Cloak HoodsX" },
    { name: "Sneaker" },
    { name: "Cloak Hair RareOveralls" },
    { name: "Sneakershade" },
  ],
},

//OG KickHeads w/HoodedCap *3k =
{
  growEditionSizeTo: 24,
  layersOrder: [
    { name: "Hoodie Backgrounds" },
    { name: "Hoodie Head" },
    { name: "Hoodie Eyes" },
    { name: "Hoodie Capped2" },
    { name: "Hoodie Expressions" },
    { name: "Hoodie Sneaker2" },
    { name: "Sneakershade" },
    { name: "Hoodie RareOveralls" },
  ],
},

// Hood Up w/ Mask *No Mouths = 
{
  growEditionSizeTo: 27,
  layersOrder: [
    { name: "Background" },
    { name: "Head" },
    { name: "Eyes" },
    { name: "Mask" },
    { name: "HeadwareforMask" },
    { name: "Hoodsbig" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "HoodBig RareOveralls" },
  ],
},

// Hood Up Skeleton w/ Mask  =
{
  growEditionSizeTo: 30,
  layersOrder: [
    { name: "Background" },
    { name: "Skulls" },
    { name: "Eyes" },
    { name: "Mask" },
    { name: "HeadwareforMask" },
    { name: "Hoodsbig" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "HoodBig RareOveralls" },
  ],
},
// Hood Up KickHead w/Fades & Headbands  =
{
  growEditionSizeTo: 33,
  layersOrder: [
    { name: "Background" },
    { name: "Head" },
    { name: "Eyes" },
    { name: "Headware" },
    { name: "Hoodsbig" },
    { name: "Expressions" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "HoodBig RareOveralls" },
  ],
},

// Hood Up KickHead x Ape w/Fades & Headbands  =
{
  growEditionSizeTo: 37,
  layersOrder: [
    { name: "Background" },
    { name: "Heads M" },
    { name: "Eyes" },
    { name: "Headware Monkeyed" },
    { name: "Hoodsbig" },
    { name: "Expressions" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "HoodBig RareOveralls" },
  ],
},

// Hood Up KH Skeleton w/Fades & Headbands  =
{
  growEditionSizeTo: 40,
  layersOrder: [
    { name: "Background" },
    { name: "Skulls" },
    { name: "Eyes" },
    { name: "Headware" },
    { name: "Hoodsbig" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "HoodBig RareOveralls" },
  ],
},

// Hood Up KickHead Goat w/Fades & Headbands  =
{
  growEditionSizeTo: 43,
  layersOrder: [
    { name: "Background" },
    { name: "Down Head G" },
    { name: "Goated" },
    { name: "Goat Thugz" },
    { name: "Goat Hood" },
    { name: "Goat Kicks" },
    { name: "Sneakershade" },
    { name: "Goat Rares" },
  ],
},

//Hood Down KickHead x Ape w/Shades, Hair, Headbands & Mask?  =low
{
  growEditionSizeTo: 47,
  layersOrder: [
    { name: "Background" },
    { name: "Down Head M" },
    { name: "Down Shades" },
    { name: "Down Mask" },
    { name: "Down Hood" },
    { name: "Down Headware" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Down RareOveralls" },
  ],
},

//Hood Down KH Skeleton w/ Shades, Hair, Headbands & Mask?   =
{
  growEditionSizeTo: 50,
  layersOrder: [
    { name: "Background" },
    { name: "Down Skulls" },
    { name: "Down Shades" },
    { name: "Down Mask" },
    { name: "Down Hood" },
    { name: "Down Headware" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Down RareOveralls" },
  ],
},

//Hood Down KickHead Goat w/Hair, Headbands**  =
{
  growEditionSizeTo: 53,
  layersOrder: [
    { name: "Background" },
    { name: "Down Head G" },
    { name: "Goated" },
    { name: "Goat DownHoods" },
    { name: "Goat Headware" },
    { name: "Goat Kicks" },
    { name: "Sneakershade" },
    { name: "Goat Rares" },
  ],
},

//Hood Down KickHead x Ape w/ Hair & Headbands  =
{
  growEditionSizeTo: 56,
  layersOrder: [
    { name: "Background" },
    { name: "Down Head M" },
    { name: "Down Eyes" },
    { name: "Down Hood" },
    { name: "Down Headware" },
    { name: "Down Expressions" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Down RareOveralls" },
  ],
},

//Hood Down KickHead Goat =
{
  growEditionSizeTo: 59,
  layersOrder: [
    { name: "Background" },
    { name: "Down Head G" },
    { name: "Goated" },
    { name: "Down Hood" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Goat Horns" },
    { name: "Goat Extras" },
  ],
},

//Hood Down KH Skeletons w/ Hair & Headbands  =
{
  growEditionSizeTo: 62,
  layersOrder: [
    { name: "Background" },
    { name: "Down Skulls" },
    { name: "Down Eyes" },
    { name: "Down Hood" },
    { name: "Down Headware" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Down RareOveralls" },
  ],
},

// HoodDown Black Monkey w/Hair =
{
  growEditionSizeTo:65,
  layersOrder: [
    { name: "Background" },
    { name: "M Head Blk" },
    { name: "Down Eyes" },
    { name: "Down Hood" },
    { name: "M Hair Blk" },
    { name: "Down Expressions" },
    { name: "Down HairShades" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Down HairRare" },
  ],
},

// HoodDown Brown Monkey w/Hair & Shades =
{
  growEditionSizeTo:68,
  layersOrder: [
    { name: "Background" },
    { name: "M Head Brn" },
    { name: "Down Eyes" },
    { name: "Down Hood" },
    { name: "M Hair Brn" },
    { name: "Down Expressions" },
    { name: "Down HairShades" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Down HairRare" },
  ],
},

// HoodDown Albino Monkey w/Hair & Shades =
{
  growEditionSizeTo:71,
  layersOrder: [
    { name: "Background" },
    { name: "M Head Blnd" },
    { name: "Down Eyes" },
    { name: "Down Hood" },
    { name: "M Hair Blnd" },
    { name: "Down Expressions" },
    { name: "Down HairShades" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Down HairRare" },
  ],
},

//Hood Down KickHead w/Hair & Shades *NO HATS
{
  growEditionSizeTo:74,
  layersOrder: [
    { name: "Background" },
    { name: "Down Head" },
    { name: "Down Eyes" },
    { name: "Down Hood" },
    { name: "Down Hair" },
    { name: "Down Expressions" },
    { name: "Down HairShades" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Down HairRare" },
  ],
},

//Hood Down KH Skeletons w/Hair & Shades *NO HATS 
{
  growEditionSizeTo:77,
  layersOrder: [
    { name: "Background" },
    { name: "Down Skulls" },
    { name: "Down Eyes" },
    { name: "Down Hood" },
    { name: "Down Hair" },
    { name: "Down HairShades" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Down HairRare" },
  ],
},

//KickHead Nude w/Hair & Shades
{
  growEditionSizeTo:80,
  layersOrder: [
    { name: "Background" },
    { name: "Nude Head" },
    { name: "Down Eyes" },
    { name: "Nude Hair" },
    { name: "Down Expressions" },
    { name: "Down HairShades" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Down HairRare" },
  ],
},

//KH Nude Black Monkey w/Hair & Shades
{
  growEditionSizeTo:83,
  layersOrder: [
    { name: "Background" },
    { name: "M Head Blk" },
    { name: "M Hair Blk" },
    { name: "Down Expressions" },
    { name: "Down HairShades" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Down HairRare" },
  ],
},

//KH Nude Brown Monkey w/Hair & Shades
{
  growEditionSizeTo:86,
  layersOrder: [
    { name: "Background" },
    { name: "M Head Brn" },
    { name: "M Hair Brn" },
    { name: "Down Expressions" },
    { name: "Down HairShades" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Down HairRare" },
  ],
},
//KH Nude Albino Monkey w/Hair & Shades
{
  growEditionSizeTo:89,
  layersOrder: [
    { name: "Background" },
    { name: "M Head Blnd" },
    { name: "M Hair Blnd" },
    { name: "Down Expressions" },
    { name: "Down HairShades" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Down HairRare" },
  ],
},

//KH Nude Skeleton w/Hair & Shades
{
  growEditionSizeTo:92,
  layersOrder: [
    { name: "Background" },
    { name: "Nude Skulls" },
    { name: "Down Eyes" },
    { name: "Nude Hair" },
    { name: "Down HairShades" },
    { name: "Sneaker" },
    { name: "Sneakershade" },
    { name: "Down HairRare" },
  ],
},

//KickHead Goat Nude w/Hair
{
  growEditionSizeTo:95,
  layersOrder: [
    { name: "Background" },
    { name: "Down Head G" },
    { name: "Goated" },
    { name: "Goat Exp" },
    { name: "Goat Hathair" },
    { name: "Goat Kicks" },
    { name: "Sneakershade" },
    { name: "Goat Rares" },
  ],
},


//KickHead Nude w/Hats
{
  growEditionSizeTo:98,
  layersOrder: [
    { name: "Background" },
    { name: "Nude CapHead" },
    { name: "Nude Eyes" },
    { name: "Nude Headware" },
    { name: "Down Expressions" },
    { name: "Sneaker" },
    { name: "Down RareOveralls" },
    { name: "Sneakershade" },
  ],
},

//KH Skeleton Nude w/Hats
{
  growEditionSizeTo:101,
  layersOrder: [
    { name: "Background" },
    { name: "Nude Skulls" },
    { name: "Nude Eyes" },
    { name: "Nude Headware" },
    { name: "Sneaker" },
    { name: "Down RareOveralls" },
    { name: "Sneakershade" },
  ],
},

//KickHead Goat Nude
{
  growEditionSizeTo:104,
  layersOrder: [
    { name: "Background" },
    { name: "GoatHead" },
    { name: "Goatface" },
    { name: "Sneaker" },
    { name: "Goat Horns" },
    { name: "Goat Extras" },
    { name: "Sneakershade" },
  ],
},

];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 3200,
  height: 3200,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://kickheadz.com", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'KHeadz DROP';
const CONTRACT_SYMBOL = 'KH';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x717E8565B2af73d8C235c7c4133431Bdf00cC90d';
const TREASURY_ADDRESS = '0x717E8565B2af73d8C235c7c4133431Bdf00cC90d';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.001; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-06-06T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-06-06T11:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = '0x717E8565B2af73d8C235c7c4133431Bdf00cC90d'; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = 'Y03f0da0f-a198-4f37-b7c8-698b26952164'; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = "KICKHEADZ"; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Purchase to Reveal this Limited Edition KickHead"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeiakbuiqdqiq5reojxikmximvv4rt45iwjefcr2pfiqpuylimljlhy"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
