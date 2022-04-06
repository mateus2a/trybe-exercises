book = 24.20
discount = 0.4
discount_book_library = book * discount
book_ship = book - discount_book_library
transport = 3.00
transport_aditional = 0.75
copy = 60
books = discount_book_library * (copy - 1)
books_additional = (59 * 0.75) * 59
first_book_transport = book_ship + transport
others_books = books * books_additional

print(books_additional)
