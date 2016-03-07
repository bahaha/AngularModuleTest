module.exports= function($scope, $state, TestService){
		console.log('enter controller_852')
		$scope.test = TestService.getTest()
	}
