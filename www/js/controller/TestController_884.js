module.exports= function($scope, $state, TestService){
		console.log('enter controller_884')
		$scope.test = TestService.getTest()
	}
