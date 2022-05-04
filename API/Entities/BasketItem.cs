namespace API.Entities
{
    public class BasketItem
    {
        public int id { get; set; }

        public int Quantity { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }

    }
}