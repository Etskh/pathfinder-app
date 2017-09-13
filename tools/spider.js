// Run this script on http://paizo.com/pathfinderRPG/prd/coreRulebook/spellLists.html
(function(){
	var spellList = {};
	$('p b a').each( function(index, elem) {
		if( elem.href.indexOf('/spells/') !== -1 ) {
            var desc = '';
            var otherNodes = elem.parentNode.parentNode.childNodes;
            otherNodes.forEach( function(node) {
                if( node.textContent !== elem.innerText ) {
                    desc += node.textContent;
                }
            });
			spellList[elem.innerText] = {
                href: elem.href,
                desc: desc,
            };
		}
	});
	var spellArray = [];
	for( var spellName in spellList ) {
		spellArray.push({
			name: spellName,
			href: spellList[spellName].href,
            short_description: spellList[spellName].desc,
		});
	}

	console.log(JSON.stringify(spellArray));
})();
