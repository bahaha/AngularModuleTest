module.exports= function($scope, $state, TestService){
		console.log('enter controller_389')
		$scope.test = TestService.getTest()
	}
