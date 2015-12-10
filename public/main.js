angular.module('climbingCalculator', []);

//Getting the mdoule
angular.module('climbingCalculator')

// Setting Controller
angular.module ('climbingCalculator')
.controller('mainController',['$scope', function($scope) {

	$scope.userInput={
		grade: ""
	}

	$scope.showCommentsSection = false
	$scope.showAboutLink = false
	$scope.showDonateSection = false

	$scope.showDonate = function() {
		$scope.showDonateSection = true
		$scope.showAboutLink = false
		$scope.showCommentsSection = false
	}

	$scope.showComments = function() {
		$scope.showCommentsSection= true
		$scope.showAboutLink = false
		$scope.showDonateSection = false
	}

	$scope.showAbout = function(){
		$scope.showAboutLink = true
		$scope.showCommentsSection = false 
		$scope.showDonateSection = false
	}

	$scope.navbarButtons = [
		{	button: "About",
			pressed: false,
			operation: $scope.showAbout
		},

		{	button: "Donate",
			pressed:false,
			operation: $scope.showDonate
		}
	]

	$scope.clickNavBarButton = function($index){
		for (var i = 0; i < $scope.navbarButtons.length; i++) {
			$scope.navbarButtons[i].pressed=false
		}
		$scope.navbarButtons[$index].pressed = true
		$scope.navbarButtons[$index].operation()
	}

	$scope.arrayOfButtons = [

		{	buttonText: "YDS",
			selected: false,
			parameter:"yds"
		},
		{
			buttonText: "British Tech",
			selected: false,
			parameter: "britishTech"
		},
		{
			buttonText: "French",
			selected: false,
			parameter: "french"
		},
		{
			buttonText: "UIAA",
			selected: false,
			parameter: "uiaa"
		},
		{
			buttonText: "Saxon",
			selected: false,
			parameter: "saxon"
		},
		{
			buttonText: "EwBank",
			selected: false,
			parameter: "ewBank"
		},
		{
			buttonText: "EwBank(South Africa)",
			selected: false,
			parameter: "ewBankSA"
		},
		{
			buttonText: "Finnish",
			selected: false,
			parameter: "finnish"
		},
		{
			buttonText: "Sweden/Noway",
			selected: false,
			parameter: "sweNor"
		},
		{
			buttonText: "Brazil",
			selected: false,
			parameter: "brazil"
		},
		{
			buttonText: "Hueco(bouldering)",
			selected: false,
			parameter: "hueco"
		},
		{
			buttonText: "UK Bouldering",
			selected: false,
			parameter: "ukBouldering"
		},
		{
			buttonText: "Fontainebleau(bouldering)",
			selected: false,
			parameter: "font"
		}
	]

	$scope.clickButton = function($index){
		for (var i = 0; i < $scope.arrayOfButtons.length; i++) {
			$scope.arrayOfButtons[i].selected = false
		}
		$scope.arrayOfButtons[$index].selected = true
		$scope.selectedParameter = $scope.arrayOfButtons[$index].parameter
	}

	var exception = "There are no real equivalents in this grading system."
	$scope.globalArray = []

	var GlobalGradeCreator = function(yds, britishTech, britishAdj, french, uiaa, saxon, ewBank, ewBankSA, finnish, sweNor, brazil, hueco, ukBouldering, font){
		this.yds = yds || exception
		this.britishTech = britishTech || exception
		this.britishAdj = britishAdj || exception
		this.french = french || exception
		this.uiaa = uiaa || exception
		this.saxon = saxon || exception
		this.ewBank = ewBank || exception
		this.ewBankSA = ewBankSA || exception
		this.finnish = finnish || exception
		this.sweNor = sweNor|| exception
		this.brazil = brazil|| exception
		this.hueco = hueco || exception
		this.ukBouldering = ukBouldering || exception
		this.font = font || exception
		$scope.globalArray.push(this)
	}

	var a = new GlobalGradeCreator ("5.0","","","","","","3-4","3-4","","","I sup", "", "", "")
	var b = new GlobalGradeCreator ("5.1","2","","2","II","II","5-6","5-6","2","2","II", "", "", "")
	var c = new GlobalGradeCreator ("5.2","","D","","","","7-8","7-8","","","II sup", "", "", "")
	var d = new GlobalGradeCreator ("5.3","3","","3","III","III","8-9","8-9","3","3","", "", "", "")
	var e = new GlobalGradeCreator ("5.4","","VD","4a","IV","IV","10-11","10-11","4","4","III", "", "", "")
	var f = new GlobalGradeCreator ("5.5","4a","S","4b","IV+","V","11-12","11-12","5-","5-","III sup", "", "", "")
	var g = new GlobalGradeCreator ("5.6","4b","HS","4c","V","VI","13","13","5","5","IV", "", "", "")
	var h = new GlobalGradeCreator ("5.7","4c","VS","5a","V+","","14-15","14-15","","","", "", "", "")
	var i = new GlobalGradeCreator ("5.8","","HVS","5b","VI-","VIIa","13","13","5","5","IV", "", "", "")
	var j = new GlobalGradeCreator ("5.9","5a","","5c","VI","VIIb","17","17-18","","6-","V", "v0", "B1", "4")
	var k = new GlobalGradeCreator ("5.10a","","E1","6a","VI+","VIIc","18","19","6-","","VI", "v0+", "B2", "4+")
	var l = new GlobalGradeCreator ("5.10b","5b","","6a+","VII-","","19","20","","6","","v0+", "B2", "4+")
	var m = new GlobalGradeCreator ("5.10c","","E2","6b","VII","VIIIa","20","21","6","6+","VI sup","v1","B3","5")
	var n = new GlobalGradeCreator ("5.10d","5c","","6b+","VII+","VIIIb","","22","","7-","v1","B3","5")
	var o = new GlobalGradeCreator ("5.11a","","E3","6c","","VIIIc","21","","6+","","7a","v2","B4","6a")
	var p = new GlobalGradeCreator ("5.11b","","","6c+","VIII-","","22","23","","7","7b","v3","","6a+")
	var q = new GlobalGradeCreator ("5.11c","6a","E4","","","IXa","23","24","7-","7+","7c","v4","B5-6","6b/c")
	var r = new GlobalGradeCreator ("5.11d","","","7a","VIII","IXb","24","25","7","","","v4","B5-6","6b/c")
	var s = new GlobalGradeCreator ("5.12a","","E5","7a+","VIII+","IXc","25","26","7+","8-","8a","v4","B5-6","6b/c")
	var t = new GlobalGradeCreator ("5.12b","","","7b","","","26","27","8-","","8b","v5","","6c+")
	var u = new GlobalGradeCreator ("5.12c","6b","E6","7b+","IX-","Xa","27","28","8","8","8c","v6","B7","7a")
	var v = new GlobalGradeCreator ("5.12d","","","7c","IX","Xb","28","29","8+","","9a","v6","B7","7a")
	var w = new GlobalGradeCreator ("5.13a","","E7","7c+","IX+","Xc","29","30","9-","8+","9b","v7","B8","7a+")
	var x = new GlobalGradeCreator ("5.13b","6c","","8a","","","","31","9","9-","9c","v8","","7b+")
	var y = new GlobalGradeCreator ("5.13c","","E8","8a+","X-","XIa","30","32","9+","","10a","v9","B9","7c")
	var z = new GlobalGradeCreator ("5.13d","","E9","8b","X","XIb","31","33","10-","9","10b","v9","B9","7c")
	var ad = new GlobalGradeCreator ("5.14a","7a","E10","8b+","X+","XIc","32","34","10","","10c","v10","B10","7c+")
	var ae = new GlobalGradeCreator ("5.14b","","","8c","","","33","35","10+","9+","11a","v11","B11","8a")
	var af = new GlobalGradeCreator ("5.14c","7b","E11","8c+","XI-","","34","36","11-","","11b","v12","B12","8a+")
	var ag = new GlobalGradeCreator ("5.14d","","","9a","XI","","35","37","11","","11c","v13","B12","8a+")
	var ah = new GlobalGradeCreator ("5.15a","","","9a+","XI+","","36","38","","","12a","","","")
	var ai = new GlobalGradeCreator ("5.15b","","","9b","XI+/XII-","","37","39","","","12a","","","")
	var aj = new GlobalGradeCreator ("5.15c","","","9b+","XII-","","38","40","","","12c","","","")


	$scope.otherErrorMessage = "You did not select which grade type you are inputting. I dont like tricks..."
	$scope.showstandardResult = true

	$scope.submit = function(){
		console.log($scope.userInput.grade.length)
		console.log($scope.selectedParameter)
		$scope.showstandardResult = true
		$scope.revealError = false
		if (($scope.userInput.grade.length > 5) || ($scope.userInput.grade.length === 0))  {
			$scope.errorMessage = "It doesnt look like you entered a known climbing grade."
			$scope.showstandardResult = false
			$scope.revealError = true
		}
		else{
			for (var i = 0; i<$scope.globalArray.length; i++) {
				if(($scope.globalArray[i][$scope.selectedParameter]) === $scope.userInput.grade){
					$scope.results = $scope.globalArray[i]	 	
				}
			}
		}
	}

	$scope.closeModal = function(){
		$scope.userInput={grade: ""}
	}

// $scope.arrayOfComments = [
// {comment: "Donec interdum quam vel leo venenatis, non dapibus ante aliquet. Nullam elit leo, semper sit amet bibendum vel, rhoncus eu lectus.",
// author: "Puebla Dubin",
// timestamp: "Mon Sep 28 2015",
// },

// {
// comment: "Mauris vel purus auctor, convallis diam rhoncus, volutpat nulla. Mauris eu urna ac urna malesuada placerat sit amet id mauris.",
// author: "Maxwell Lasky",
// timestamp:"Mon Sep 28 2015",
// },]


// $scope.userComment = {
// comment: "",
// author: ""
// }

// $scope.showCommentInput = false

// $scope.addComment = function(){
// $scope.showCommentInput = !$scope.showCommentInput
// }

// $scope.submitComment = function(){
// $scope.todaysDate = new Date()
// $scope.userComment.timestamp = $scope.todaysDate.toDateString()
// $scope.arrayOfComments.push($scope.userComment)
// console.log($scope.arrayOfComments)
// $scope.userComment = {
// comment: "",
// author: "",
// }
// $scope.showCommentInput = false
// }

// $scope.closeAddComment = function () {
// $scope.showCommentsSection = false
// }
}]);