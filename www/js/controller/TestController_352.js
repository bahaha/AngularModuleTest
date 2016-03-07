module.exports= function($scope, $state, TestService){
		console.log('enter controller_352')
		$scope.test = TestService.getTest()
	}
