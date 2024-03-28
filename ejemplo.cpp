#include <iostream>
#include <string>
#include <vector>

using namespace std;

// Estructura para representar un libro
struct Libro {
    string titulo;
    string autor;
    int anio;
    bool prestado;
};

// Estructura para representar un usuario
struct Usuario {
    string nombre;
    vector<Libro*> libros_prestados;
};

// Función para agregar un libro a la biblioteca
void agregarLibro(vector<Libro>& biblioteca) {
    Libro libro;
    cout << "Ingrese el título del libro: ";
    getline(cin >> ws, libro.titulo);
    cout << "Ingrese el autor del libro: ";
    getline(cin >> ws, libro.autor);
    cout << "Ingrese el año de publicación del libro: ";
    cin >> libro.anio;
    libro.prestado = false;
    biblioteca.push_back(libro);
    cout << "Libro agregado con éxito.\n";
}

// Función para eliminar un libro de la biblioteca
void eliminarLibro(vector<Libro>& biblioteca, const string& titulo) {
    for (auto it = biblioteca.begin(); it != biblioteca.end(); ++it) {
        if (it->titulo == titulo) {
            biblioteca.erase(it);
            cout << "Libro eliminado con éxito.\n";
            return;
        }
    }
    cout << "No se encontró el libro en la biblioteca.\n";
}

// Función para buscar un libro por título
void buscarLibro(const vector<Libro>& biblioteca, const string& titulo) {
    for (const auto& libro : biblioteca) {
        if (libro.titulo == titulo) {
            cout << "Libro encontrado:\n";
            cout << "Título: " << libro.titulo << endl;
            cout << "Autor: " << libro.autor << endl;
            cout << "Año: " << libro.anio << endl;
            cout << (libro.prestado ? "Estado: Prestado\n" : "Estado: Disponible\n");
            return;
        }
    }
    cout << "No se encontró el libro en la biblioteca.\n";
}

// Función para prestar un libro a un usuario
void prestarLibro(vector<Libro>& biblioteca, Usuario& usuario, const string& titulo) {
    for (auto& libro : biblioteca) {
        if (libro.titulo == titulo && !libro.prestado) {
            libro.prestado = true;
            usuario.libros_prestados.push_back(&libro);
            cout << "Libro prestado con éxito.\n";
            return;
        }
    }
    cout << "El libro no está disponible para préstamo o no se encontró en la biblioteca.\n";
}

// Función para devolver un libro prestado por un usuario
void devolverLibro(vector<Libro>& biblioteca, Usuario& usuario, const string& titulo) {
    for (auto it = usuario.libros_prestados.begin(); it != usuario.libros_prestados.end(); ++it) {
        if ((*it)->titulo == titulo) {
            (*it)->prestado = false;
            usuario.libros_prestados.erase(it);
            cout << "Libro devuelto con éxito.\n";
            return;
        }
    }
    cout << "No se encontró el libro prestado por el usuario.\n";
}

int main() {
    vector<Libro> biblioteca;
    Usuario usuario;

    while (true) {
        cout << "\n********** Sistema de Gestión de Biblioteca **********\n";
        cout << "1. Agregar libro\n";
        cout << "2. Eliminar libro\n";
        cout << "3. Buscar libro\n";
        cout << "4. Prestar libro\n";
        cout << "5. Devolver libro\n";
        cout << "6. Salir\n";
        cout << "Ingrese su opción: ";

        int opcion;
        cin >> opcion;

        cin.ignore(); // Limpiar el buffer del teclado

        switch (opcion) {
            case 1:
                agregarLibro(biblioteca);
                break;
            case 2: {
                string titulo;
                cout << "Ingrese el título del libro a eliminar: ";
                getline(cin >> ws, titulo);
                eliminarLibro(biblioteca, titulo);
                break;
            }
            case 3: {
                string titulo;
                cout << "Ingrese el título del libro a buscar: ";
                getline(cin >> ws, titulo);
                buscarLibro(biblioteca, titulo);
                break;
            }
            case 4: {
                string titulo;
                cout << "Ingrese el título del libro a prestar: ";
                getline(cin >> ws, titulo);
                prestarLibro(biblioteca, usuario, titulo);
                break;
            }
            case 5: {
                string titulo;
                cout << "Ingrese el título del libro a devolver: ";
                getline(cin >> ws, titulo);
                devolverLibro(biblioteca, usuario, titulo);
                break;
            }
            case 6:
                cout << "Saliendo del programa...\n";
                return 0;
            default:
                cout << "Opción inválida. Intente nuevamente.\n";
        }
    }

    return 0;
}
