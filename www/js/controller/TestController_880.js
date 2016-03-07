module.exports= function($scope, $state, TestService){
		console.log('enter controller_880')
		$scope.test = TestService.getTest()
	}
