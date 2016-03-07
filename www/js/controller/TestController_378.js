module.exports= function($scope, $state, TestService){
		console.log('enter controller_378')
		$scope.test = TestService.getTest()
	}
