module.exports= function($scope, $state, TestService){
		console.log('enter controller_887')
		$scope.test = TestService.getTest()
	}
