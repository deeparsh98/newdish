function find_defaulters(following,followers){
	defaulters = []
	for(e = 0;e<following.length;e++){
		idx = followers.indexOf(following[e])
		if(idx == -1)
			defaulters.push(following[e])
	}
	return defaulters
}

following = []
[]
eles_new = document.getElementsByClassName('FPmhX notranslate _0imsa ')

for (i=0;i<eles_new.length;i++){
	following.push(eles_new[i].innerHTML)
}
followers = []
eles = document.getElementsByClassName('FPmhX notranslate _0imsa ')

for (i=0;i<eles.length;i++){
	followers.push(eles[i].innerHTML)
}

defaulters = find_defaulters(following,followers)

for(i in defaulters){
	str = str.concat(defaulters[i]+'\n')	
}

var textToSave = find_defaulters(following,followers);

var hiddenElement = document.createElement('a');

hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
hiddenElement.target = '_blank';
hiddenElement.download = 'myFile.txt';
hiddenElement.click();