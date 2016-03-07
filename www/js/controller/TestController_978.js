module.exports= function($scope, $state, TestService){
		console.log('enter controller_978')
		$scope.test = TestService.getTest()
	}
