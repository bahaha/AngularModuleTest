module.exports= function($scope, $state, TestService){
		console.log('enter controller_513')
		$scope.test = TestService.getTest()
	}
