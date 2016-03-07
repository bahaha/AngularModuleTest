module.exports= function($scope, $state, TestService){
		console.log('enter controller_140')
		$scope.test = TestService.getTest()
	}
