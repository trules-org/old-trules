const businessEvents = [{
  id: 1,
  name: 'Order Placed',
}, {
  id: 2,
  name: 'Order Canceled',
}];


export const resolvers = {
  Query: {
    businessEvents: () => {
      return businessEvents;
    },
  },
};
