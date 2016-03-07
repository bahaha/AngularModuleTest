module.exports= function($scope, $state, TestService){
		console.log('enter controller_617')
		$scope.test = TestService.getTest()
	}
