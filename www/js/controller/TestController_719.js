module.exports= function($scope, $state, TestService){
		console.log('enter controller_719')
		$scope.test = TestService.getTest()
	}
