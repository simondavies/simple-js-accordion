"use strict";
/**
* @author Simon Davies
* @version 0.1.0
* @description Simple Vanilla JavaScript Accordion
*
* @class
* AccordionJS
*/

/**
 * Example usage
 *
 * <!-- Accordion wrapper -->
 * <div id="the-accordion" class="accordion-wrapper">
 *
 *   <!-- accordion panel -->
 *   <div class="accordion-panel">
 *      <div class="accordion-title"><a href="#"><!-- Your Panel title/link copy here --></a></div>
 *      <div class="accordion-content">
 *        <!-- your panel content to go here-->
 *      </div>
 *    </div>
 *    <!-- eo:accordion panel -->
 *
 *    <!-- add as many accordion panels as required -->
 *
 * </div>
 * <!-- eo:Accordion wrapper -->
 *
 *  to call/init
 *      <script type="text/javascript">
 *      (function(){
 *          new AccordionJS();
 *          new AccordionJS('the-accordion-two');
 *      })();
 *     </script>
 *
 * The second option enables you to assign a different id value, so you can run two or more on one page
 */

;(function(window){

    var accordion = null,
        activePanelClass = 'is-active',
        accordionPanels = null,
        currentPanel = null;

    /**
     *  Contructor
     *
     * @param {containerID} to enable mroe than one accordion on a page
     */
    function AccordionJS(containerID){

        var accordionContainer = (containerID) ? containerID : 'the-accordion';

        accordion = document.querySelector('#' + accordionContainer);

        if(accordion !== null) {

            accordionPanels = accordion.querySelectorAll('.accordion-panel');

            if(accordionPanels.length > 0 ){
                _init();
            }
        }

    }

    /**
     * _init method
     */
    function _init(){

        currentPanel = _checkForActivePanelOnLoad();

        accordionPanels.forEach(function(panel){
            panel.querySelector('a').addEventListener('click', _activateSelectedPanel);
        });

    }

    /**
     * begin the activation process on selecting a panel
     * @param  {Event} evt
     * @return {Void}
     */
    function _activateSelectedPanel(evt){

        evt.preventDefault();

        var selectedPanel = evt.currentTarget.parentElement.parentElement;

        if(currentPanel === selectedPanel) return;

        _removeCurrentPanel();

        _displaySelectedPanel(selectedPanel);

    }

    /**
     * dispaly the new selected panel
     *
     * @param  {Object} selectedPanel the selected panel
     * @return {Void}
     */
    function _displaySelectedPanel(selectedPanel){

        selectedPanel.classList.add(activePanelClass);

        currentPanel = selectedPanel;

    }

    /**
     * Remove the currently selected panel
     *
     * @return {self} to enable chaining
     */
    function _removeCurrentPanel(){

        if (typeof currentPanel === 'undefined') return this;

        currentPanel.classList.remove(activePanelClass);

    }
    /**
     * check to see if the user has enabled a panel on inital page load
     * @return {Object} set to the active panel if set
     */
    function _checkForActivePanelOnLoad(){

        for (var i = 0; i < accordionPanels.length; i++) {

            if(accordionPanels[i].classList.contains(activePanelClass)){

              return accordionPanels[i];

            }

        }

    }

     //-- return the window object
     window.AccordionJS = AccordionJS;


 })(window);
