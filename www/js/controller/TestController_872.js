module.exports= function($scope, $state, TestService){
		console.log('enter controller_872')
		$scope.test = TestService.getTest()
	}
