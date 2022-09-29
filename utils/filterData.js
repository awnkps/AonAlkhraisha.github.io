export const filterData = [
  {
    items: [
      { name: 'Buy', value: 'for-sale' },
      { name: 'Rent', value: 'for-rent' },
    ],
    placeholder: 'Purpose',
    queryName: 'purpose',
  },
  {
    items: [
      { name: 'Daily', value: 'daily' },
      { name: 'Weekly', value: 'weekly' },
      { name: 'Monthly', value: 'monthly' },
      { name: 'Yearly', value: 'yearly' },
    ],
    placeholder: 'Rent Frequency',
    queryName: 'rentFrequency',
  },
  {
    items: [
      { name: '1,000', value: '1000' },
      { name: '2,000', value: '2000' },
      { name: '3,000', value: '3000' },
      { name: '4,000', value: '4000' },
      { name: '5,000', value: '5000' },
      { name: '6,000', value: '6000' },
      { name: '8,500', value: '8500' },
    ],
    placeholder: 'Min Price(EURO)',
    queryName: 'minPrice',
  },
  {
    items: [
      { name: '5,000', value: '5000' },
      { name: '6,000', value: '6000' },
      { name: '8,500', value: '8500' },
      { name: '11,000', value: '11000' },
      { name: '13,500', value: '13500' },
      { name: '16,000', value: '16000' },
      { name: '18,500', value: '18500' },
      { name: '20,000', value: '20000' },
      { name: '30,000', value: '30000' },
      { name: '40,000', value: '40000' },
      { name: '50,000', value: '50000' },
      { name: '60,000', value: '60000' },
      { name: '70,000', value: '70000' },
      { name: '80,000', value: '80000' },
      { name: '90,000', value: '90000' },
      { name: '100,000', value: '100000' },
    ],
    placeholder: 'Max Price(EURO)',
    queryName: 'maxPrice',
  },
  {
    items: [
      { name: 'Lowest Price', value: 'price-asc' },
      { name: 'Highest Price', value: 'price-des' },
      { name: 'Newest', value: 'date-asc' },
      { name: 'Oldest', value: 'date-desc' },
      { name: 'Verified', value: 'verified-score' },
      { name: 'City Level Score', value: 'city-level-score' },
    ],
    placeholder: 'Sort',
    queryName: 'sort',
  },
  {
    items: [
      { name: '1000', value: '1000' },
      { name: '2000', value: '2000' },
      { name: '3000', value: '3000' },
      { name: '4000', value: '4000' },
      { name: '5000', value: '5000' },
      { name: '10000', value: '10000' },
      { name: '20000', value: '20000' },
    ],
    placeholder: 'Max Area(sqft)',
    queryName: 'areaMax',
  },
  {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
      { name: '7', value: '7' },
      { name: '8', value: '8' },
      { name: '9', value: '9' },
      { name: '10', value: '10' },
    ],
    placeholder: 'Rooms',
    queryName: 'roomsMin',
  },
  {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
      { name: '7', value: '7' },
      { name: '8', value: '8' },
      { name: '9', value: '9' },
      { name: '10', value: '10' },
    ],
    placeholder: 'Baths',
    queryName: 'bathsMin',
  },
  {
    items: [
      { name: 'Furnished', value: 'furnished' },
      { name: 'Unfurnished', value: 'unfurnished' },
    ],
    placeholder: 'Furnish Type',
    queryName: 'furnishingStatus',
  },
  {
    items: [
      { name: 'Apartment', value: '4' },
      { name: 'Townhouses', value: '16' },
      { name: 'Villas', value: '3' },
      { name: 'Penthouses', value: '18' },
      { name: 'Hotel Apartments', value: '21' },
      { name: 'Villa Compound', value: '19' },
      { name: 'Residential Plot', value: '14' },
      { name: 'Residential Floor', value: '12' },
      { name: 'Residential Building', value: '17' },
    ],
    placeholder: 'Property Type',
    queryName: 'categoryExternalID',
  },
];

export const getFilterValues = (filterValues) => {
  const {
    purpose,
    rentFrequency,
    categoryExternalID,
    minPrice,
    maxPrice,
    areaMax,
    roomsMin,
    bathsMin,
    sort,
    locationExternalIDs,
  } = filterValues;

  const values = [
    {
      name: 'purpose',
      value: purpose,
    },
    {
      name: 'rentFrequency',
      value: rentFrequency,
    },
    {
      name: 'minPrice',
      value: minPrice,
    },
    {
      name: 'maxPrice',
      value: maxPrice,
    },
    {
      name: 'areaMax',
      value: areaMax,
    },
    {
      name: 'roomsMin',
      value: roomsMin,
    },
    {
      name: 'bathsMin',
      value: bathsMin,
    },
    {
      name: 'sort',
      value: sort,
    },
    {
      name: 'locationExternalIDs',
      value: locationExternalIDs,
    },
    {
      name: 'categoryExternalID',
      value: categoryExternalID,
    },
  ];

  return values;
};
