module.exports= function($scope, $state, TestService){
		console.log('enter controller_73')
		$scope.test = TestService.getTest()
	}
