export const FACTORY_ADDRESS = '0xcedb8a736b666a90182a270a016bd7d3114fe9da'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://likeswap.org/tokenlist.json',
]

// hide from overview list
export const TOKEN_BLACKLIST = [
  '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1',
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76',
  '0x93b2fff814fcaeffb01406e80b4ecd89ca6a021b',
  '0x87baea506c92af5fe975c1be325326dd2c48798e',
   

  // rebass tokens
  '0x9ea3b5b4ec044b70375236a281986106457b20ef',
  '0x05934eba98486693aaec2d00b0e9ce918e37dc3f',
  '0x3d7e683fc9c86b4d653c9e47ca12517440fad14e',
  '0xfae9c647ad7d89e738aba720acf09af93dc535f7',
  '0x7296368fe9bcb25d3ecc19af13655b907818cc09',
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5',
  '0x97cb8cbe91227ba87fc21aaf52c4212d245da3f8',
  '0x1acba73121d5f63d8ea40bdc64edb594bd88ed09',
  '0x7d7e813082ef6c143277c71786e5be626ec77b20',
  '0x85e94b4d7887088a0b646cdf5df39d6ef4d882f3',
]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76':
    'TikTok Inc. has asserted this token is violating its trademarks and therefore is not available.',
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or ETH pairings.'

// pairs that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES_PAIRS = [
	'0x9928e4046d7c6513326ccea028cd3e7a91c7590a',
	'0x87da823b6fc8eb8575a235a824690fda94674c88',
	'0xcd7989894bc033581532d2cd88da5db0a4b12859',
	'0xe1573b9d29e2183b1af0e743dc2754979a40d237',
	'0x45804880de22913dafe09f4980848ece6ecbaf78',
	'0x709f7b10f22eb62b05913b59b92ddd372d4e2152',
	'0x95f4ea60949fb8abb3d1bb114fbcb8e8e012b41f',
	'0xa3c81bbcbff337a9754816fb8559121332c4d9b4',
	'0xc114165652d66b263dda5d7c1c57d9e54f86cc52',
	'0xbf82df15664dfc173035a296bf2056186e43dd9c',
	'0x7abf762b2ea1f3b2a72b3e1c01b8822fb831fe57',
	'0xfcb9a5f2c25de43c0a48d7370c9bedfe62914526',
	'0x46e2019d4d9507b155da71bb9a9d2a56cd40b4b9',
	'0xe7358c03f2595f96ee833e6cb28c837d58525b3d',
	'0x25ca6ea112340fe6acc4024c4391914de8c1c297',
]

// tokens that should be tracked but arent due to lag in subgraph
// all pairs that include token will be tracked
export const TRACKED_OVERRIDES_TOKENS = ['0x956f47f50a910163d8bf957cf5846d573e7f87ca']
