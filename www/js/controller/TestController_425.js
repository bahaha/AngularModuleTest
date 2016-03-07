module.exports= function($scope, $state, TestService){
		console.log('enter controller_425')
		$scope.test = TestService.getTest()
	}
