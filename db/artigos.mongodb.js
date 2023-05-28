/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('app-artigos');

db.artigos.drop();

// Insert a few documents into the sales collection.
db.artigos.insertMany([
    {
        '_id': 1,
        'imagem': 'https://live.staticflickr.com/65535/50976781998_1b1a05f4d2_w_d.jpg',
        'titulo': 'Título 1',
        'descricao': 'Descrição 1',
        'url': 'https://www.flickr.com/photos/pmillera4/50976781998/in/photolist-2kEDkhs-2k2U1f9-2mbYQzx-2muKRNz-2jKgEZW-2kCRjTj-2m1HUPS-2md5tec-7SsoKW-2mgYEGY-7SsoE1-bVrbzm-98YCwT-abTxJ8-5FAG6-mXga2R-77iadW-oopKdp-6GnwaV-7wCNf-HzDEPi-dWj9LQ-aScSSB-7wCNA-8myJtj-626Yo3-ekmLoS-ifeVgu-7zxBVB-7zwtAS-7zBovd-7zBkSq-2yGwW-65f3oc-fUyB42-atrh7p-96wFdf-7wCQm-6ce5MG-7wCPK-7wCQ3-7wCMM-6ce5eJ-6hSuQR-7wCNZ-7wCPt-6ce4oS-4j869h-ijikSx-5iwPVy',
    },
    {
        '_id': 2,
        'imagem': 'https://live.staticflickr.com/65535/50560934276_bf54270fa2_w_d.jpg',
        'titulo': 'Título 2',
        'descricao': 'Descrição 2',
        'url': 'https://www.flickr.com/photos/pmillera4/50560934276/in/photolist-2k2U1f9-2mbYQzx-2muKRNz-2jKgEZW-2kCRjTj-2m1HUPS-2md5tec-7SsoKW-2mgYEGY-7SsoE1-bVrbzm-98YCwT-abTxJ8-5FAG6-mXga2R-77iadW-oopKdp-6GnwaV-7wCNf-HzDEPi-dWj9LQ-aScSSB-7wCNA-8myJtj-626Yo3-ekmLoS-ifeVgu-7zxBVB-7zwtAS-7zBovd-7zBkSq-2yGwW-65f3oc-fUyB42-atrh7p-96wFdf-7wCQm-6ce5MG-7wCPK-7wCQ3-7wCMM-6ce5eJ-6hSuQR-7wCNZ-7wCPt-6ce4oS-4j869h-ijikSx-5iwPVy-eT4DK7',
    },
    {
        '_id': 3,
        'imagem': 'https://live.staticflickr.com/65535/50976781998_1b1a05f4d2_w_d.jpg',
        'titulo': 'Título 3',
        'descricao': 'Descrição 3',
        'url': 'https://www.flickr.com/photos/pmillera4/50976781998/in/photolist-2kEDkhs-2k2U1f9-2mbYQzx-2muKRNz-2jKgEZW-2kCRjTj-2m1HUPS-2md5tec-7SsoKW-2mgYEGY-7SsoE1-bVrbzm-98YCwT-abTxJ8-5FAG6-mXga2R-77iadW-oopKdp-6GnwaV-7wCNf-HzDEPi-dWj9LQ-aScSSB-7wCNA-8myJtj-626Yo3-ekmLoS-ifeVgu-7zxBVB-7zwtAS-7zBovd-7zBkSq-2yGwW-65f3oc-fUyB42-atrh7p-96wFdf-7wCQm-6ce5MG-7wCPK-7wCQ3-7wCMM-6ce5eJ-6hSuQR-7wCNZ-7wCPt-6ce4oS-4j869h-ijikSx-5iwPVy',
    },
    {
        '_id': 4,
        'imagem': 'https://live.staticflickr.com/65535/50560934276_bf54270fa2_w_d.jpg',
        'titulo': 'Título 4',
        'descricao': 'Descrição 4',
        'url': 'https://www.flickr.com/photos/pmillera4/50560934276/in/photolist-2k2U1f9-2mbYQzx-2muKRNz-2jKgEZW-2kCRjTj-2m1HUPS-2md5tec-7SsoKW-2mgYEGY-7SsoE1-bVrbzm-98YCwT-abTxJ8-5FAG6-mXga2R-77iadW-oopKdp-6GnwaV-7wCNf-HzDEPi-dWj9LQ-aScSSB-7wCNA-8myJtj-626Yo3-ekmLoS-ifeVgu-7zxBVB-7zwtAS-7zBovd-7zBkSq-2yGwW-65f3oc-fUyB42-atrh7p-96wFdf-7wCQm-6ce5MG-7wCPK-7wCQ3-7wCMM-6ce5eJ-6hSuQR-7wCNZ-7wCPt-6ce4oS-4j869h-ijikSx-5iwPVy-eT4DK7',
    }
]);
