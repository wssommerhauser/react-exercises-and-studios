export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1334416842i/830502.jpg";
   let book2 = "https://media.tenor.com/XSns7DzGv38AAAAC/cat-running.gif";
   let book3 = "https://149522020.v2.pressablecdn.com/wp-content/uploads/2020/06/b960fb_82311cf8f41b4194a0884c1173537658mv2.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="It" />
         <img src={book2} alt="Apple Cat: The Book" />
         <img src={book3} alt="JAWS" />
      </div>      
   );
}