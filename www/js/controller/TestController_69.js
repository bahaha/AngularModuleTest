module.exports= function($scope, $state, TestService){
		console.log('enter controller_69')
		$scope.test = TestService.getTest()
	}
