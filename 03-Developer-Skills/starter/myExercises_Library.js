'use strict';

/*

Aufgabe: Bibliotheksverwaltung

Erstelle eine JavaScript-Anwendung zur Verwaltung von Büchern in einer Bibliothek. Verwende dabei Klassen und Objekte, um die Funktionalität zu implementieren.

Anforderungen:

Erstelle eine Klasse Book, die folgende Eigenschaften hat:
title (Titel des Buches)
author (Autor des Buches)
isbn (Internationale Standardbuchnummer des Buches)

Erstelle eine Klasse Library, die folgende Eigenschaften hat:
name (Name der Bibliothek)
books (ein Array, um die Bücher in der Bibliothek zu speichern)
Implementiere eine Methode addBook(book) in der Library-Klasse, die ein Buchobjekt als Parameter annimmt und dieses der Bibliothek hinzufügt.

Implementiere eine Methode removeBook(isbn) in der Library-Klasse, die anhand der ISBN-Nummer ein Buch aus der Bibliothek entfernt.

Implementiere eine Methode listBooks() in der Library-Klasse, die alle Bücher in der Bibliothek auflistet.

Bonusaufgaben:

Implementiere eine Methode findBookByAuthor(author) in der Library-Klasse, die alle Bücher eines Autors auflistet.

Implementiere eine Methode findBookByTitle(title) in der Library-Klasse, die ein Buch anhand des Titels sucht und zurückgibt.

Hinweise:

Du kannst ein Array verwenden, um die Bücher in der Bibliothek zu speichern.
Du kannst die ISBN-Nummer verwenden, um Bücher eindeutig zu identifizieren.
Du kannst Testdaten erstellen, um deine Lösung zu überprüfen und sicherzustellen, dass alle Funktionen wie erwartet funktionieren.
Diese Aufgabe ermöglicht es dir, die Verwendung von Klassen und Objekten in JavaScript zu üben, während du gleichzeitig eine sinnvolle Anwendung entwickelst, die die Verwaltung von Büchern in einer Bibliothek simuliert. Viel Spaß beim Codieren!

*/

class Book {
  title;
  author;
  isbn;

  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class Library {
  name;
  books;

  constructor(name, books) {
    this.name = name;
    this.books = books;
  }

  removeBook(isbnToRemove) {
    this.books.forEach((book) => {
      this.books = this.books.filter((book) => book.isbn !== isbnToRemove);
    });
  }

  addBook(bookToAdd){
    if(bookToAdd instanceof Book){
        this.books.push(bookToAdd);
    }else{
        `Es können nur Bücher aufgenommen werden.`
    }
  }

  listBooks(){
    console.log(JSON.stringify(this.books))
  }

  findBookByAuthor(authorToFind){
    return this.books.filter(book => book.author === authorToFind);
  }

}

const bookArray = [
  new Book('Paw Patrol', 'Rubbel', 12345),
  new Book('Rabe Socke', 'Hans Muster', 23456),
  new Book('Pingu', 'Erwin Meier', 34567),
];

const library1 = new Library("Kinderbibliothek", bookArray);

console.log(library1);

library1.removeBook(12345);

console.log(library1);

library1.addBook(new Book("Mein neues Buch", "Manuel Gut", 45678));

console.log(library1);

console.log(library1.listBooks());

console.log(library1.findBookByAuthor("Manuel Gut"));
console.log(library1.addBook(new Book("Mein zweites Buch", "Manuel Gut", 67890)));
console.log(library1.findBookByAuthor("Manuel Gut"));
