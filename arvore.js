// Estrutura de dados usando o conceito de árvores. Ciclo 3 Unis  usando JavaScript.
const arvore = {};

function insert(tree, value) {
    if (tree.value) {
        if (value >= 10) {
            console.log('Elemento maior que 10.')
            console.log('Elemento inserido do lado direito.')
            insert(tree.right, value)
        
        } else {
            console.log('Elemento inserido do lado esquerdo.')
            insert(tree.left, value)

        }

    } else {
        tree.value = value
        tree.right = {}
        tree.left = {}
    }

    console.table(arvore)

}

insert(arvore,5);
insert(arvore,6);
insert(arvore,11);




