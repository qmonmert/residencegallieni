/**
 * Created by Quentin on 05/04/15.
 */

'use strict';

angular.module('residencegallieniApp')
    .controller('ApartmentController', function ($scope, $location, $sce) {

        $location.url();
        $scope.apartmentId = $location.url().split("/")[2];

        if ($scope.apartmentId == 1) {
            $scope.apartmentDescription = $sce.trustAsHtml("<ul><li>Paris 14e (75014), Montsouris - Dareau</li><li>Proche rue Daguerre et place Denfert-Rochereau.</li><li>Charmant appartement 2 pièces 45 m² ancien,</li><li>5e ascenseur sans vis-à-vis, lumineux 3 expositions</li><li>balcon filant, 3 porte-fenêtres.</li><li>grand séjour 26 m², chambre 10 m², salle d'eau douche, wc,</li><li>cuisine indépendante. Chauffage individuel gaz.</li><li>Cave saine.</li><li>Charges 130 €/mois.</li><li>Bon état général.</li><li>Agences s'abstenir. 390.000 €.</li></ul>");
        } else if ($scope.apartmentId == 2) {
            $scope.apartmentDescription = $sce.trustAsHtml("Exclusivite orpi rouen st sever appartement avec terrasse, comprenant entrée, séjour avec cheminée, cuisine, 2 chambres, dressing, cellier, salle de bains, . Dpe : e. CABINET COUREL Tél. 02.35.73.58.50 Réf. annonce : 03102302PEAE");
        } else if ($scope.apartmentId == 3) {
            $scope.apartmentDescription = $sce.trustAsHtml("FONTAINE est un appartement de charme, totalement rénové dans le style d’un appartement typiquement parisien des années 1950. Il se compose d’une vaste entrée (13 m²) décorée de gravures anciennes, comportant un grand placard-penderie. Elle distribue plusieurs pièces dans le sens inverse des aiguilles d’une montre: une première chambre à coucher, le salon/salle à manger ainsi que la cuisine et les toilettes.");
        } else {
            $scope.apartmentDescription = "Cet appartement ne possède pas de description.";
        }

    });
